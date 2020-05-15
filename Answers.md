1. What problem does the context API help solve?

    -Passing properties through a large ammount of components without having to pass props through every parent.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    -1.the store is essentially the vault that holds all the state for an application
    2.reducer take in current state and adjust them according to actions
    3.Actions activate reducers to change state in the store

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    -Component state is state stored locally in a component while Application state is state stored globally through redux. Component state is good for use locally in that component or to a sibling , while Application state is used for components that are burried deep into a component tree.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    - redux-thunk is a middleware that lets action-creators return functions instead of objects

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    -I like both redux and Context API, they both have their pros and cons but i used Context API for this sprint becuase it is easier for me to understand and implement on small applications
