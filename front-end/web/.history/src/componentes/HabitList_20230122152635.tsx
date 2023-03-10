import * as  Checkbox from '@radix-ui/react-checkbox';
import  { Check } from 'phosphor-react';
import { useEffect } from 'react';
import { api } from './../lib/axios';
import { useState } from 'react';


interface HabitsListProps{
date:Date
}

interface HabitsInfo {
    possibleHabits:{
        id: string,
        title: string;
        created_at: string
        
    }[],
    completedHabits: string[]
}

export function HabitList ({date}: HabitsListProps) {

    const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

    useEffect(() => {
        api.get('day',{
            params: {
                date: date.toISOString(),

            }
        }).then(response => {
setHabitsInfo(response.data)      
 })
    }, [])

    return (
        

        <div className='mt-6 flex flex-col gap-3'>
            {habitsInfo?.possibleHabits.map(habit => {
                return (

                    <Checkbox.Root
                    key={habit.id}
                    checked={habitsInfo.completedHabits.includes(habit.id)}
                    className='flex items-center gap-3 group'
                >
    
                    <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500'>
                        <Checkbox.Indicator>
                            <Check size={20} className="text-white" />
                        </Checkbox.Indicator>
    
                    </div>
    
                    <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through'>
                        {habit.title}
    
                    </span>
    
                </Checkbox.Root>
                )
            })}


        </div>
    )
}