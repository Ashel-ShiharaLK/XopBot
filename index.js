const bot=require("./lib/client"),{VERSION:VERSION}=require("./config"),start=async()=>{Debug.info(`Version ${VERSION}`);try{await bot.init(),bot.logger.info("⏳ Database syncing!"),await bot.DATABASE.sync(),await bot.connect()}catch(t){Debug.error(t),start()}};start();