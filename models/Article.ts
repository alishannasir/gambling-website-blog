import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IArticle extends Document {
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featuredImage?: string;
    category: mongoose.Types.ObjectId;
    tags: string[];
    author: mongoose.Types.ObjectId;
    metaTitle?: string;
    metaDescription?: string;
    status: 'draft' | 'published';
    views: number;
    publishedAt?: Date;
    readTime?: number; // Virtual
    createdAt: Date;
    updatedAt: Date;
}

const ArticleSchema: Schema<IArticle> = new Schema(
    {
        title: { type: String, required: true, maxlength: 200 },
        slug: { type: String, required: true, unique: true },
        content: { type: String, required: true },
        excerpt: { type: String, maxlength: 300 },
        featuredImage: { type: String },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        tags: [{ type: String }],
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        metaTitle: { type: String, maxlength: 60 },
        metaDescription: { type: String, maxlength: 160 },
        status: { type: String, enum: ['draft', 'published'], default: 'draft' },
        views: { type: Number, default: 0 },
        publishedAt: { type: Date },
    },
    { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

ArticleSchema.index({ slug: 1 });
ArticleSchema.index({ category: 1 });
ArticleSchema.index({ status: 1 });
ArticleSchema.index({ publishedAt: -1 });

ArticleSchema.virtual('readTime').get(function (this: IArticle) {
    const wordsPerMinute = 200;
    // content might be HTML, stripping roughly for word count or just counting spaces
    const text = this.content || '';
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
});

const Article: Model<IArticle> = mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

export default Article;
