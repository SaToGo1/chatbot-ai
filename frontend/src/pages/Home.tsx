import { LeftSide } from "../components/Home/left-side"
import { RightSide } from "../components/Home/right-side"

export default function Home() {
  return (
    <main style={mainStyle}>
      <LeftSide />
      <RightSide />
    </main>
  )
}

const mainStyle = {
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: '60% 40%',
}
