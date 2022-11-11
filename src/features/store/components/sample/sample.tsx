import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import * as ac from '../../reducer/action.creators';

export function Sample() {
    const tasks = useSelector((state: rootState) => state.tasks); //l aparte del estado que queremos, qué rama queremos del store

    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(
            ac.loadActionCreate([
                {
                    id: '1',
                    title: 'terminar redux',
                    responsible: 'pepe',
                    isComplete: false,
                },
            ])
        );
    }, [dispatcher]);

    return (
        <>
            {tasks.map((item) => (
                <>
                    <p key={item.id}>Task: {item.title}</p>
                    <p>Responsible: {item.responsible}</p>
                </>
            ))}
        </>
    );
}
