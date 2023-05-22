import { choice, remove } from './helpers';
import fruitsArray from './foods';
import { render } from '@testing-library/react';

function App() {
    const randFruit = choice(fruitsArray);
    return (
        <div>
            <p>I'd like one {randFruit}, please.</p>
            <p>Here you go: {randFruit}</p>
            <p>Delicious! May I have another?</p>
            <p>I'm sorry, we're all out. We have {remove(fruitsArray, randFruit)} left.</p>
        </div>
    )
}

render(<App />);

export default App;