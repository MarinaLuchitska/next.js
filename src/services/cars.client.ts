import { ICar } from '@/models/ICar';

const BASE = 'http://owu.linkpc.net/carsAPI/v1/cars';

export async function createCarApi(car: Partial<ICar>) {
    const res = await fetch(BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });

    const ct = res.headers.get('content-type') || '';
    return ct.includes('application/json') ? res.json() : res.text();
}
