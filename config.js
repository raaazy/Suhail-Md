const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') :"254746231551" ;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_29_08_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyLFxuICAgICAgICAxODcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDUwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg3LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxNTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODAsXG4gICAgICAgIDUyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDY0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDM4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk1c0R1L2thR1RaVEcvQng5UlZSOWR2bFhCT3pLTC9RNTVLdXZBK3FMQUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlBnOWx1ZzhtUVR5VFBHb2ZsM3hpOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjI0NjdjMjMtNDI2My00ZGQxLWI2Y2EtZTVkMDY1ZmZkZTM3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE5NyxcbiAgICAgIDIzMyxcbiAgICAgIDIxOSxcbiAgICAgIDcsXG4gICAgICAyMzEsXG4gICAgICA1OSxcbiAgICAgIDE1MCxcbiAgICAgIDEwNSxcbiAgICAgIDE3NCxcbiAgICAgIDEsXG4gICAgICA4LFxuICAgICAgMTAzLFxuICAgICAgMTUwLFxuICAgICAgOTIsXG4gICAgICAxNjQsXG4gICAgICAyNTIsXG4gICAgICA4MSxcbiAgICAgIDE0MSxcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDIyNyxcbiAgICAgIDEwOCxcbiAgICAgIDk4LFxuICAgICAgMjYsXG4gICAgICAyNDIsXG4gICAgICA3OSxcbiAgICAgIDI0NixcbiAgICAgIDgzLFxuICAgICAgMTM0LFxuICAgICAgMjgsXG4gICAgICAxMDEsXG4gICAgICA4NixcbiAgICAgIDc0LFxuICAgICAgMTQ5LFxuICAgICAgMjM0LFxuICAgICAgMjM5LFxuICAgICAgMTgsXG4gICAgICAxNzksXG4gICAgICAxMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU1pWTlk1WDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0NjIzMTU1MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjI1ODE3NTExMjAwOTI6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV1gzTndIRVBhajJiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpuY2Fkdk9Gak84elBPRUJ0WG54T1grTy8rMEJZczFEdkRDVFA5aWUzMG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaFJiOWxldUIzYm5oYXVESm9jRk5FMGcvYzBlQUYvZ0NvaTArVHFPZ2ZEMHFOVkxIZVFESmhDLzZ6Qm10ZS85TzIrUWJxRjhORng5c1ZwTXppL3dwQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZUdHS0doTjcxMDMxNEtnQXk0aU9waVhyR0NrdUplMTNEbUlDcGVVSnMrakNBcC9SbGpHZHdpdXNDWktEK28wTmVSanIxMlcyakF5N1U1VFZtNkY5RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQ2MjMxNTUxOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMjI0NTY5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRitOXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGK04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKRkFxc3ZtbWs3NjRZUkE2dU5uREJJYnJxdTV2UW41bm5RV25vRGVXckZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNzM0OTY1MTUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
