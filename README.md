## React + Vite

The front-end for JobFinder

## How to run locally:

- Download dependencies:
```
npm install
```

- Serve by running:
```
npm run dev
npm run test
```

- Front-end Backlog:
    - Applicant:
        - Manage(view/edit) profile: (INITIAL, need ti improve the photo upload)
            - about (PRIORITY)
            - education (PRIORITY)
            - experience (PRIORITY)
            - skills (PRIORITY) // might remove this from MVP
    - Recruiter:
        - Manage(view/edit) company profile: (INITIAL)
            - about (PRIORITY)
        - Manage job posting: 
            - close job posting with reason: (PRIORITY)
                - already found applicant
                - job posting widthrawn
                - others
    - Others:
        - Might want to move the profile in auth state
            - Or... or... or, we could also apply the same approach where we get the user name and role to user state
        - Need to simplify forms since its a the code is too many
        - Need to improve photo upload design style (still not working)
        - When deleting, there needs to be a confirmation
    