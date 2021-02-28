/**
 * @file source.cpp
 *
 * Content taken entirely from https://github.com/yourWaifu/sleepy-discord/blob/master/examples/hello/example0.cpp */
#include "dotenv.h"
#include "sleepy_discord/sleepy_discord.h"

class MyBot : public SleepyDiscord::DiscordClient {
    public:
        using SleepyDiscord::DiscordClient::DiscordClient;
        void onMessage(SleepyDiscord::Message message) override {
            if (message.startsWith("++hello")) {
                sendMessage(message.channelID, "Hello " + message.author.username);
            }
        }
};

int main() {
    dotenv::env.load_dotenv();
    MyBot bot(dotenv::env["DISCORD_BOT_TOKEN"], SleepyDiscord::USER_CONTROLED_THREADS);
    bot.run();
}
