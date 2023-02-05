const App = () => {
  const now = new Date('year, monthIndex, day, hours, minutes')
  const a = 10
  const b = 20
  console.log(now, a+b)
  return (
    <div>
      <p>Hello world, it is {now.toDateString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

export default App