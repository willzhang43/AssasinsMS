/*
    This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc> 
                       Matthias Butz <matze@odinms.de>
                       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License version 3
    as published by the Free Software Foundation. You may not use, modify
    or distribute this program under any other version of the
    GNU Affero General Public License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

package net.sf.odinms.net.channel.pvp;

import java.util.Collections;
import java.util.ArrayList;
import java.util.List;

import net.sf.odinms.client.MapleCharacter;
import net.sf.odinms.client.MapleBuffStat;
import net.sf.odinms.client.MapleStat;
import net.sf.odinms.client.MapleJob;
import net.sf.odinms.net.world.guild.MapleGuild;
import net.sf.odinms.net.channel.handler.AbstractDealDamageHandler;
import net.sf.odinms.server.life.MapleMonster;
import net.sf.odinms.server.life.MapleLifeFactory;
import net.sf.odinms.server.maps.MapleMap;
import net.sf.odinms.tools.MaplePacketCreator;
import net.sf.odinms.tools.Pair;

public class MaplePvp {
        private static int pvpDamage;
        private static int maxDis;
        private static int maxHeight;
        private static boolean isAoe;
        public static boolean isLeft;
        public static boolean isRight;

        private static boolean isMeleeAttack(AbstractDealDamageHandler.AttackInfo attack) {
                switch(attack.skill) {
                        case 1001004:    //Power Strike
                        case 1001005:    //Slash Blast
                        case 4001334:    //Double Stab
                        case 4201005:    //Savage Blow
                        case 1111004:    //Panic: Axe
                        case 1111003:    //Panic: Sword
                        case 1311004:    //Dragon Fury: Pole Arm
                        case 1311003:    //Dragon Fury: Spear
                        case 1311002:    //Pole Arm Crusher
                        case 1311005:    //Sacrifice
                        case 1311001:    //Spear Crusher
                        case 1121008:    //Brandish
                        case 1221009:    //Blast
                        case 1121006:    //Rush
                        case 1221007:    //Rush
                        case 1321003:    //Rush
                        case 4221001:    //Assassinate
                        return true;
                }
                return false;
        }

        private static boolean isRangeAttack(AbstractDealDamageHandler.AttackInfo attack) {
                switch(attack.skill) {
                        case 2001004:    //Energy Bolt
                        case 2001005:    //Magic Claw
                        case 3001004:    //Arrow Blow
                        case 3001005:    //Double Shot
                        case 4001344:    //Lucky Seven
                        case 2101004:    //Fire Arrow
                        case 2101005:    //Poison Brace
                        case 2201004:    //Cold Beam
                        case 2301005:    //Holy Arrow
                        case 4101005:    //Drain
                        case 2211002:    //Ice Strike
                        case 2211003:    //Thunder Spear
                        case 3111006:    //Strafe
                        case 3211006:    //Strafe
                        case 4111005:    //Avenger
                        case 4211002:    //Assaulter
                        case 2121003:    //Fire Demon
                        case 2221006:    //Chain Lightning
                        case 2221003:    //Ice Demon
                        case 2111006:     //Element Composition F/P
                        case 2211006:     //Element Composition I/L
                        case 2321007:    //Angel's Ray
                        case 3121003:    //Dragon Pulse
                        case 3121004:    //Hurricane
                        case 3221003:    //Dragon Pulse
                        case 3221001:    //Piercing
                        case 3221007:    //Sniping
                        case 4121003:    //Showdown taunt
                        case 4121007:    //Triple Throw
                        case 4221007:    //Boomerang Step
                        case 4221003:    //Showdown taunt
                        case 4111004:    //Shadow Meso
                        return true;
                }
                return false;
        }

        private static boolean isAoeAttack(AbstractDealDamageHandler.AttackInfo attack) {
                switch(attack.skill) {
                        case 2201005:    //Thunderbolt
                        case 3101005:    //Arrow Bomb : Bow
                        case 3201005:    //Iron Arrow : Crossbow
                        case 1111006:    //Coma: Axe
                        case 1111005:    //Coma: Sword
                        case 1211002:    //Charged Blow
                        case 1311006:    //Dragon Roar
                        case 2111002:    //Explosion
                        case 2111003:    //Poison Mist
                        case 2311004:    //Shining Ray
                        case 3111004:    //Arrow Rain
                        case 3111003:    //Inferno
                        case 3211004:    //Arrow Eruption
                        case 3211003:    //Blizzard (Sniper)
                        case 4211004:    //Band of Thieves
                        case 1221011:    //Sanctuary Skill
                        case 2121001:    //Big Bang
                        case 2121007:    //Meteo
                        case 2121006:    //Paralyze
                        case 2221001:    //Big Bang
                        case 2221007:    //Blizzard
                        case 2321008:    //Genesis
                        case 2321001:    //Big Bang
                        case 4121004:    //Ninja Ambush
                        case 4121008:    //Ninja Storm knockback
                        case 4221004:    //Ninja Ambush
                        return true;
                }
                return false;
        }

        private static void DamageBalancer(AbstractDealDamageHandler.AttackInfo attack) {
                if (attack.skill == 0) {
                        pvpDamage = 100;
                        maxDis = 130;
                        maxHeight = 35;
                } else if (isMeleeAttack(attack)) {
                        maxDis = 130;
                        maxHeight = 40;
                        isAoe = false;
                        if (attack.skill == 4201005) {
                                pvpDamage = (int) (Math.floor(Math.random() * (75 - 5) + 5));
                        } else if (attack.skill == 1121008) {
                                pvpDamage = (int) (Math.floor(Math.random() * (320 - 180) + 180));
                                maxHeight = 50;
                        } else if (attack.skill == 4221001) {
                                pvpDamage = (int) (Math.floor(Math.random() * (200 - 150) + 150));
                        } else if (attack.skill == 1121006 || attack.skill == 1221007 || attack.skill == 1321003) {
                                pvpDamage = (int) (Math.floor(Math.random() * (200 - 80) + 80));
                        } else {
                                pvpDamage = (int) (Math.floor(Math.random() * (600 - 250) + 250));
                        }
                } else if (isRangeAttack(attack)) {
                        maxDis = 300;
                        maxHeight = 35;
                        isAoe = false;
                        if (attack.skill == 4201005) {
                                pvpDamage = (int) (Math.floor(Math.random() * (75 - 5) + 5));
                        } else if (attack.skill == 4121007) {
                                pvpDamage = (int) (Math.floor(Math.random() * (60 - 15) + 15));
                        } else if (attack.skill == 4001344 || attack.skill == 2001005) {
                                pvpDamage = (int) (Math.floor(Math.random() * (195 - 90) + 90));
                        } else if (attack.skill == 4221007) {
                                pvpDamage = (int) (Math.floor(Math.random() * (350 - 180) + 180));
                        } else if (attack.skill == 3121004) {
                                maxDis = 450;
                                pvpDamage = (int) (Math.floor(Math.random() * (50 - 20) + 20));
                        } else if (attack.skill == 2121003 || attack.skill == 2221003) {
                                pvpDamage = (int) (Math.floor(Math.random() * (600 - 300) + 300));
                        } else {
                                pvpDamage = (int) (Math.floor(Math.random() * (400 - 250) + 250));
                        }
                } else if (isAoeAttack(attack)) {
                        maxDis = 350;
                        maxHeight = 350;
                        isAoe = true;
                        if (attack.skill == 2121001 || attack.skill == 2221001 || attack.skill == 2321001 || attack.skill == 2121006) {
                                pvpDamage = (int) (Math.floor(Math.random() * (350 - 180) + 180));
                        } else {
                                pvpDamage = (int) (Math.floor(Math.random() * (700 - 300) + 300));
                        }
                }
        }

        private static void monsterBomb(MapleCharacter player, MapleCharacter attackedPlayers, MapleMap map, AbstractDealDamageHandler.AttackInfo attack) {
                //level balances
                if (attackedPlayers.getLevel() > player.getLevel() + 25) {
                        pvpDamage *= 1.35;
                } else if (attackedPlayers.getLevel() < player.getLevel() - 25) {
                        pvpDamage /= 1.35;
                } else if (attackedPlayers.getLevel() > player.getLevel() + 100) {
                        pvpDamage *= 1.50;
                } else if (attackedPlayers.getLevel() < player.getLevel() - 100) {
                        pvpDamage /= 1.50;
                }
                //class balances
                if (player.getJob().equals(MapleJob.MAGICIAN)) {
                        pvpDamage *= 1.10;
                }

                //buff modifiers
        Integer mguard = attackedPlayers.getBuffedValue(MapleBuffStat.MAGIC_GUARD);
        Integer mesoguard = attackedPlayers.getBuffedValue(MapleBuffStat.MESOGUARD);
        if (mguard != null) {
            List<Pair<MapleStat, Integer>> stats = new ArrayList<Pair<MapleStat, Integer>>(1);
            int mploss = (int) (pvpDamage / .5);
                        pvpDamage *= .70;
            if (mploss > attackedPlayers.getMp()) {
                                pvpDamage /= .70;
                attackedPlayers.cancelBuffStats(MapleBuffStat.MAGIC_GUARD);
            } else {
                                attackedPlayers.setMp(attackedPlayers.getMp() - mploss);
                                stats.add(new Pair(MapleStat.MP, attackedPlayers.getMp()));
                                attackedPlayers.getClient().getSession().write(MaplePacketCreator.updatePlayerStats(stats, false));
                        }
        } else if (mesoguard != null) { 
            int mesoloss = (int) (pvpDamage * .75);
                        pvpDamage *= .75;
            if(mesoloss > attackedPlayers.getMeso()) {
                                        pvpDamage /= .75;
                    attackedPlayers.cancelBuffStats(MapleBuffStat.MESOGUARD);
            } else {
                    attackedPlayers.gainMeso(-mesoloss, false);
            }
                }

                //the bomb
                MapleMonster pvpMob = MapleLifeFactory.getMonster(9400711);
                map.spawnMonsterOnGroudBelow(pvpMob, attackedPlayers.getPosition());
                for (int attacks = 0; attacks < attack.numDamage; attacks++) {
                        map.broadcastMessage(player, MaplePacketCreator.damagePlayer(attack.numDamage, pvpMob.getId(), attackedPlayers.getId(), pvpDamage), false);
                        player.getClient().getSession().write(MaplePacketCreator.damagePlayer(attack.numDamage, pvpMob.getId(), attackedPlayers.getId(), pvpDamage));
                        attackedPlayers.addHP(-pvpDamage);
                }
                int attackedDamage = pvpDamage * attack.numDamage;
                attackedPlayers.getClient().getSession().write(MaplePacketCreator.serverNotice(5, player.getName() + " has done " + attackedDamage + " damage!"));

                //rewards
                if (attackedPlayers.getHp() <= 0 && !attackedPlayers.isAlive()) {
                        int expReward = attackedPlayers.getLevel() * 1000;
                        int gpReward = (int) (Math.floor(Math.random() * (200 - 50) + 50));
                        if (player.getPvpKills() * .25 >= player.getPvpDeaths()) {
                                expReward *= 20;
                        }
                        player.gainExp(expReward, true, false);
                        if (player.getGuildId() != 0 && player.getGuildId() != attackedPlayers.getGuildId()) {
                                try {
                                        MapleGuild guild = player.getClient().getChannelServer().getWorldInterface().getGuild(player.getGuildId(), null);
                                        guild.gainGP(gpReward);
                                } catch (Exception e) {}
                        }
                        player.gainPvpKill();
                        player.getClient().getSession().write(MaplePacketCreator.serverNotice(6, "You have killed " + attackedPlayers.getName() + " gaining a pvp kill!"));
                        attackedPlayers.gainPvpDeath();
                        attackedPlayers.getClient().getSession().write(MaplePacketCreator.serverNotice(6, player.getName() + " has killed you!"));
                }
                map.killMonster(pvpMob, player, false);
        }

        public static void doPvP(MapleCharacter player, MapleMap map, AbstractDealDamageHandler.AttackInfo attack) {
                DamageBalancer(attack);
                if (isAoe) {
                        isLeft = true;
                        isRight = true;
                        for (MapleCharacter attackedPlayers : player.getMap().getNearestPvpChar(player.getPosition(), maxDis, maxHeight, Collections.unmodifiableCollection(player.getMap().getCharacters()))) {
                                if (attackedPlayers.isAlive() && (player.getParty() == null || player.getParty() != attackedPlayers.getParty())) {
                                        monsterBomb(player, attackedPlayers, map, attack);
                                }
                        }
                } else if (attack.direction <= 0 && attack.stance <= 0) {
                        isLeft = true;
                        isRight = false;
                        for (MapleCharacter attackedPlayers : player.getMap().getNearestPvpChar(player.getPosition(), maxDis, maxHeight, Collections.unmodifiableCollection(player.getMap().getCharacters()))) {
                                if (attackedPlayers.isAlive() && (player.getParty() == null || player.getParty() != attackedPlayers.getParty())) {
                                        monsterBomb(player, attackedPlayers, map, attack);
                                }
                        }
                } else {
                        isLeft = false;
                        isRight = true;
                        for (MapleCharacter attackedPlayers : player.getMap().getNearestPvpChar(player.getPosition(), maxDis, maxHeight, Collections.unmodifiableCollection(player.getMap().getCharacters()))) {
                                if (attackedPlayers.isAlive() && (player.getParty() == null || player.getParty() != attackedPlayers.getParty())) {
                                        monsterBomb(player, attackedPlayers, map, attack);
                                }
                        }
                }
        }
}