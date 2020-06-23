@echo off
TITLE PCMaple v2.2 - World
COLOR 6
set CLASSPATH=.;dist\odinms.jar;dist\mina-core.jar;dist\slf4j-api.jar;dist\slf4j-jdk14.jar;dist\mysql-connector-java-bin.jar
java -Xmx500m -Dnet.sf.odinms.recvops=recvops.properties -Dnet.sf.odinms.sendops=sendops.properties -Dnet.sf.odinms.wzpath=wz\ -Dnet.sf.odinms.listwz=true -Djavax.net.ssl.keyStore=world.keystore -Djavax.net.ssl.keyStorePassword=passwd -Djavax.net.ssl.trustStore=world.truststore -Djavax.net.ssl.trustStorePassword=passwd net.sf.odinms.net.world.WorldServer
pause