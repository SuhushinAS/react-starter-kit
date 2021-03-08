// @flow
export type TExampleState = {|
    example: TExampleStore,
|};

export type TExampleStore = {|
    data: {},
    list: string[],
|};

export type TExampleData = {|
    [string]: TExample,
|};

export type TExample = {|
    [string]: string,
|};
