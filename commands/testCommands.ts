import { SlashCommandBuilder } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("Artikulo Uno!")
    .setDescription("BIBIGWASAN KITA!"),
  async execute(interaction: any) {
    await interaction.reply("ANONG PETSA ANONG ORAS!");
  },
};
