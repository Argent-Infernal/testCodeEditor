// app/api/execute/route.ts

import { NextResponse } from 'next/server';

type ExecuteResponse = {
    status: string;
    output?: string;
    error?: string;
};

const executeCode = (language: string, code: string): ExecuteResponse => {
    if (language === 'javascript') {
        if (code.includes('console.log')) {
            return {
                status: 'success',
                output: 'Hello, world!\n'
            };
        } else {
            return {
                status: 'error',
                error: 'SyntaxError: Unexpected token'
            };
        }
    }

    return {
        status: 'error',
        error: 'Unsupported language'
    };
};

export async function POST(request: Request) {
    const { language, code } = await request.json();

    if (typeof language === 'string' && typeof code === 'string') {
        const result = executeCode(language, code);
        return NextResponse.json(result);
    } else {
        return NextResponse.json({ status: 'error', error: 'Invalid input' }, { status: 400 });
    }
}