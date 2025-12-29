import connectToDatabase from '../lib/db';
import Category from '../models/Category';

const defaultCategories = [
    { name: 'Education', slug: 'education', description: 'Educational content about gambling' },
    { name: 'Reviews', slug: 'reviews', description: 'Casino and game reviews' },
    { name: 'Guides', slug: 'guides', description: 'How-to guides and tutorials' },
    { name: 'News', slug: 'news', description: 'Latest gambling industry news' },
    { name: 'Strategy', slug: 'strategy', description: 'Game strategies and tips' },
];

async function seedCategories() {
    try {
        await connectToDatabase();

        // Check if categories already exist
        const existingCount = await Category.countDocuments();

        if (existingCount > 0) {
            console.log(`✓ Categories already exist (${existingCount} found)`);
            return;
        }

        // Create default categories
        await Category.insertMany(defaultCategories);
        console.log('✓ Successfully created default categories');

    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    } finally {
        process.exit(0);
    }
}

seedCategories();
