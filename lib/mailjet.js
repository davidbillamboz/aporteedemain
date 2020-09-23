import mailjet from 'node-mailjet';

const api = mailjet.connect(
  process.env.MAILJET_API_KEY,
  process.env.MAILJET_SECRET_KEY
);

async function getContactByEmail({ email }) {
  try {
    const result = await api
      .get('contact', { version: 'v3' })
      .id(email)
      .request();
    if (!(result.body && result.body.Data && result.body.Data.length)) {
      return null;
    }
    return result.body.Data[0];
  } catch (err) {
    return null;
  }
}

async function createContact({ email, name }) {
  const result = await api.post('contact', { version: 'v3' }).request({
    Email: email,
    Name: name,
  });
  return result.body;
}

async function updateContactMeta({ email, firstname, lastname }) {
  await api
    .put('contactdata', { version: 'v3' })
    .id(email)
    .request({
      Data: [
        {
          Name: 'firstname',
          Value: firstname,
        },
        {
          Name: 'lastname',
          Value: lastname,
        },
      ],
    });
}

export async function subscribeContactToList({ email, listId }) {
  await api
    .post('contact', { version: 'v3' })
    .id(email)
    .action('managecontactslists')
    .request({
      ContactsLists: [
        {
          Action: 'addnoforce',
          ListID: listId,
        },
      ],
    });
}

export async function addContact({ email, firstname, lastname }) {
  let contact = await getContactByEmail({ email });
  if (!contact) {
    contact = await createContact({ email, name: `${firstname} ${lastname}` });
  }
  await updateContactMeta({ email, firstname, lastname });
}
