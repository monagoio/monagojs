import { Guest } from "..";

const guestTest = new Guest({
    projectName: "financemanagement",
    userName: "sac",
    token: "test"
});

test('create expenses', async () => {
    const resultCreate = await guestTest.api.post({
        url: "/expenses",
        data: {
            "name": "Expenses Name",
            "category": "belanja",
            "date": "19:00",
            "category_account_fund": "category_account_fund_1",
            "total": "10",
            "price": "10000"
        }
    })

    expect(resultCreate.status).toBe(200);
});

test('delete expenses', async () => {
    const resultCreate = await guestTest.api.post({
        url: "/expenses",
        data: {
            "name": "Expenses Name",
            "category": "belanja",
            "date": "19:00",
            "category_account_fund": "category_account_fund_1",
            "total": "10",
            "price": "10000"
        }
    })

    const resultDelete = await guestTest.api.delete({
        url: "/expenses/" + resultCreate.data.data._id
    })

    expect(resultDelete.status).toBe(200);
});


test('get expenses', async () => {
    const insertData = {
        "name": "Expenses Name",
        "category": "belanja",
        "date": "19:00",
        "category_account_fund": "category_account_fund_1",
        "total": "10",
        "price": "10000"
    };

    const resultCreate = await guestTest.api.post({
        url: "/expenses",
        data: insertData,
    })

    const resultGet = await guestTest.api.get({
        url: "/expenses/" + resultCreate.data.data._id
    })

    expect(resultGet.data.data).toEqual(expect.objectContaining(insertData));
});
