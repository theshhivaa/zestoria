import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'visit-count.json');

export async function GET() {
    try {
        let count = 0;

        // Ensure data directory exists
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read current count
        if (fs.existsSync(dataFilePath)) {
            const fileContent = fs.readFileSync(dataFilePath, 'utf-8');
            const data = JSON.parse(fileContent);
            count = data.count || 0;
        }

        // Increment count
        count += 1;

        // Write updated count
        fs.writeFileSync(dataFilePath, JSON.stringify({ count }, null, 2));

        return NextResponse.json({ value: count });
    } catch (error) {
        console.error('Error in visitor counter API:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
