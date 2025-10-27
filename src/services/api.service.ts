import 'server-only';

const BASE = 'http://owu.linkpc.net/carsAPI/v1/cars';

export async function getAllCarsApi() {
    const res = await fetch(BASE, { cache: 'no-store' });
    return res.json();
}
