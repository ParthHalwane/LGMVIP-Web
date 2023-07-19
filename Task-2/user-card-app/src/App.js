import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  padding: 10px;
  color: #fff;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const UserCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.h3`
  margin-top: 10px;
`;

const Loader = styled.div`
  text-align: center;
  margin-top: 20px;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar>
        <Button onClick={getUsers}>Get Users</Button>
      </Navbar>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CardGrid>
          {users.map((user) => (
            <UserCard key={user.id}>
              <Avatar src={user.avatar} alt="User Avatar" />
              <Name>{`${user.first_name} ${user.last_name}`}</Name>
            </UserCard>
          ))}
        </CardGrid>
      )}
    </div>
  );
}

export default App;
