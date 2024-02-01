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
        - Manage(view/edit) profile: (need to improve the photo upload)
            - education
            - experience
            - skills // might remove this from MVP
    - Recruiter:
        - Manage(view/edit) company profile: (need to improve the photo upload)
        - Manage job posting:
            - close job posting with reason:
                - already found applicant
                - job posting widthrawn
                - others
    - Others:
        - Need to move AlertMessage to a single place, but to do this, we need to have a general layout
        - Might want to move the profile in auth state
            - Or... or... or, we could also apply the same approach where we get the user name and role to user state
        - Need to simplify forms since its a the code is too many
        - Need to improve photo upload design style
        - When deleting, there needs to be a confirmation
    - Next:
        - Read(dynamic)/Update Education
        - Read(dynamic)/Update Experience
        - Close a posting
        - Confirmation on close and delete

    