package net.sf.odinms.net.channel.handler;

import java.rmi.RemoteException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import net.sf.odinms.client.MapleClient;
import net.sf.odinms.client.MapleInventoryType;
import net.sf.odinms.client.messages.ServernoticeMapleClientMessageCallback;
import net.sf.odinms.database.DatabaseConnection;
import net.sf.odinms.net.AbstractMaplePacketHandler;
import net.sf.odinms.server.AutobanManager;
import net.sf.odinms.server.MapleInventoryManipulator;
import net.sf.odinms.server.MapleItemInformationProvider;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.data.input.SeekableLittleEndianAccessor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 *
 * @author Matze
 */
public class TrockAddMapHandler extends AbstractMaplePacketHandler {

        private static Logger log = LoggerFactory.getLogger(TrockAddMapHandler.class);

        public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
		Connection con = DatabaseConnection.getConnection();
                byte addrem;
                
                addrem = slea.readByte();
                slea.readByte();
                
                if (addrem == 0x00) {
                        int mapId = slea.readInt();
                        try{
                                PreparedStatement ps = con.prepareStatement("DELETE FROM trocklocations WHERE characterid = ? AND mapid = ?");
                                ps.setInt(1, c.getPlayer().getId());
                                ps.setInt(2,mapId);
                                ps.executeUpdate();
                                ps.close();
                        }
                        catch (SQLException se)
                        {
        			log.error("SQL error: " + se.getLocalizedMessage(), se);
                	}
                        c.getSession().write(MaplePacketCreator.TrockRefreshMapList(c.getPlayer().getId()));
                } else {
                        try{
                                PreparedStatement ps = con.prepareStatement("DELETE FROM trocklocations WHERE characterid = ? AND mapid = ?");
                                ps.setInt(1, c.getPlayer().getId());
                                ps.setInt(2,c.getPlayer().getMapId());
                                ps.executeUpdate();
                                ps.close();
                        
                                ps = con.prepareStatement("INSERT INTO trocklocations VALUES(?, ?)");
                                ps.setInt(1, c.getPlayer().getId());
                                ps.setInt(2,c.getPlayer().getMapId());
                                ps.executeUpdate();
                                ps.close();
                        }
                        catch (SQLException se)
                        {
        			log.error("SQL error: " + se.getLocalizedMessage(), se);
                	}
                        c.getSession().write(MaplePacketCreator.TrockRefreshMapList(c.getPlayer().getId()));

                }
        }
}