import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  options: { customName: "KahootGame" },
})
export class Game {
  @prop({ required: true, unique: true })
  public code!: String;

  @prop({ required: true })
  public name!: String;

  @prop({ required: true })
  public questions!: [String];

  @prop({ required: true })
  public answers!: [String];

  @prop({ required: true })
  public answerIndex!: Number;
}

export const GameModel = getModelForClass(Game);
