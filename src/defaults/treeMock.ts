export const TREE_MOCK = [
    {
        code: 1,
        name: 'Root 1',
        children: [
            {
                code: 11,
                name: 'Child 1',
            },
            {
                code: 12,
                name: 'Child 2',
            },
            {
                code: 13,
                name: 'Child 3',
            },
            {
                code: 14,
                name: 'Child 4',
                children: [
                    {
                        code: 141,
                        name: 'Deep Child 1'
                    },
                    {
                        code: 142,
                        name: 'Deep Child 2'
                    },
                    {
                        code: 143,
                        name: 'Deep Child 3'
                    },
                ]
            }
        ]
    },
    {
        code: 2,
        name: 'Root 2',
        children: [
            {
                code: 112,
                name: 'Child 12',
            },
            {
                code: 122,
                name: 'Child 22',
            },
            {
                code: 132,
                name: 'Child 32',
            },
            {
                code: 142,
                name: 'Child 42',
                children: [
                    {
                        code: 1412,
                        name: 'Deep Child 12'
                    },
                    {
                        code: 1422,
                        name: 'Deep Child 22'
                    },
                    {
                        code: 1432,
                        name: 'Deep Child 32'
                    },
                ]
            }
        ]
    }
]
