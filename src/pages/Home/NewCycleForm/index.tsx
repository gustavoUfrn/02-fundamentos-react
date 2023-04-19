import { FormContainer, MinutesInput, TaskInput } from './styles'
import { CyclesContext } from '..'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Sugestão 1" />
        <option value="Sugestão 5" />
        <option value="Sugestão alfa" />
      </datalist>

      <label htmlFor="">Durante</label>
      <MinutesInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>Minutos</span>
    </FormContainer>
  )
}
