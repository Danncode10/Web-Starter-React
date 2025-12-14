import ExampleButton from '../components/ExampleButton'

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to React Stable Starter</h1>
      <p className="mb-4">
        This is a blank starter website with React, Tailwind CSS, and Bootstrap.
      </p>
      <ExampleButton>Click Me</ExampleButton>
    </div>
  )
}

export default Home
