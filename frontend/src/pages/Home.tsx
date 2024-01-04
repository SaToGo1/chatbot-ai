import { DecorationSide } from "../components/Home/decoration-side.tsx"
import { InteractionSide } from "../components/Home/interaction-side.tsx"

export default function Home() {
  return (
    <main style={mainStyle}>
      <DecorationSide />
      <InteractionSide />
    </main>
  )
}

const mainStyle = {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '60% 40%',
}
