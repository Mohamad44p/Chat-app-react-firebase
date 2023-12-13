import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Massege from "./Massege";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Massege";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [message, setMessage] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        let messageArray = [];
        querySnapshot.forEach((doc) => {
          messageArray.push({ ...doc.data(), id: doc.id });
        });
        console.log("Messages fetched:", messageArray);
        setMessage(messageArray);
      },
      (error) => {
        console.error("Error fetching messages:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [message]);

  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Stack spacing={1}>
          {message.map((msg) => (
            <Message key={msg.id} message={msg} />
          ))}
          <div ref={scroll} /> 
        </Stack>
      </Box>
    </>
  );
};

export default Chat;
