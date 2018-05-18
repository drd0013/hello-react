MyView(request):
{
    'userInfo': {

    },
    'open_jobs': [
        {
            'name': 'foo',
            'listing_date': 'something',
            'current_state': ENUM,
            'action required by me': ENUM
        }
    ]
}

DetailView(request):
{
    'applicants': [
        {
            'name': 'foo',
            'stage': ENUM,
            'next_action': ENUM,
            'assigned to a person': WHO,

        }
    ]
}

User(model)

JobListing(model)
fk Company

Application(model)
fk JobListing
fk User
current state ENUM field
validated
source


Proposal

