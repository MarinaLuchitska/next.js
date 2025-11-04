import Form from 'next/form';
import {saveCar} from "@/server-action/server-action";


export default function CreateCarPage() {
    return (
        <div style={{ padding: 16 }}>
            <Form action={saveCar}>
                <input type="text"   name="brand" placeholder="brand" />
                <input type="number" name="price" placeholder="price" />
                <input type="number" name="year"  placeholder="year" />
                <button type="submit">Save</button>
            </Form>
        </div>
    );
}
