'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { ICar } from '@/models/ICar';

export async function saveCar(data: ICar): Promise<void> {
    const res = await fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        cache: 'no-store',
    });

    if (!res.ok) {
        console.error('Create car failed', res.status, await res.text());
        throw new Error('Failed to create car');
    }

    revalidatePath('/allCars');
    redirect('/allCars');
}
