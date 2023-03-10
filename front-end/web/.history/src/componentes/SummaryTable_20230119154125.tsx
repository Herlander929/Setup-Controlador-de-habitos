import HabitDay from "./HabitDay"
import { generateDatesFromYearBegining } from './../../.history/src/utils/genarate-dates-drom-year-begining_20230119152049';

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateDatesFromYearBegining()

const minimumSummaryDatesSize = 18 * 7 //18 weeks

const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length


export function SummaryTable() {


    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">

                {weekDays.map((weekDay, index) => {
                    return (
                        <div  key={`${weekDay}-${index}`} 
                        className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center">
                            {weekDay}
                        </div>

                    )
                })}


            </div>

            <div className="grid grid-rows-7 grid-flow-rows gap-3">
               {summaryDates.map(date => {
                return <HabitDay key ={date.toString()}/>
                    
                
               })}
               {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map(() => {
                return (
                    <div>a</div>
                )
               })
               }
              

            </div>
        </div>
    )
}