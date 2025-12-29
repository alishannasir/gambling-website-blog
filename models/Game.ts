import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGame extends Document {
    title: string;
    slug: string;
    image: string;
    rating: number;
    description?: string;
    category: mongoose.Types.ObjectId;
    tags: string[];
    releaseDate?: Date;
    link?: string;
    createdAt: Date;
    updatedAt: Date;
}

const GameSchema: Schema<IGame> = new Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        rating: { type: Number, default: 0 },
        description: { type: String },
        category: { type: Schema.Types.ObjectId, ref: 'Category' }, // Optional for now as migration happens
        tags: [{ type: String }],
        link: { type: String },
        releaseDate: { type: Date },
    },
    { timestamps: true }
);

// Indexes
GameSchema.index({ slug: 1 });
GameSchema.index({ tags: 1 });

const Game: Model<IGame> = mongoose.models.Game || mongoose.model<IGame>('Game', GameSchema);

export default Game;
