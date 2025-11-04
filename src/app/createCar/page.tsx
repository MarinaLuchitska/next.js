'use client';

import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useTransition } from 'react';

import type { ICar} from '@/models/ICar';
import { carSchema } from '@/validators/car.validator';
import { saveCar } from '@/server-action/server-action';

export default function CreateCarPage() {
    const [isPending, startTransition] = useTransition();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ICar>({
        resolver: joiResolver(carSchema),
        defaultValues: {
            brand: '',
            price: 0,
            year: 2000,
        },
    });

    const onSubmit = (data: ICar) => {
        startTransition(async () => {
            await saveCar(data); // викликаємо server action
            reset();
        });
    };

    return (
        <main style={{ padding: 16 }}>
            <h1>Create car</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <input
                        type="text"
                        placeholder="brand"
                        {...register('brand')}
                    />
                    {errors.brand && (
                        <p style={{ color: 'red' }}>{errors.brand.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="price"
                        {...register('price')}
                    />
                    {errors.price && (
                        <p style={{ color: 'red' }}>{errors.price.message}</p>
                    )}
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="year"
                        {...register('year')}
                    />
                    {errors.year && (
                        <p style={{ color: 'red' }}>{errors.year.message}</p>
                    )}
                </div>

                <button type="submit" disabled={isPending}>
                    {isPending ? 'Saving...' : 'Save'}
                </button>
            </form>
        </main>
    );
}
