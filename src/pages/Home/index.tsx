import { Play } from 'phosphor-react'
import {
  CountdownCointainer,
  FormContainer,
  HomeContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para seu projeto" />

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
            min={5}
            max={60}
          />

          <span>Minutos</span>
        </FormContainer>

        <CountdownCointainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownCointainer>

        <StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
