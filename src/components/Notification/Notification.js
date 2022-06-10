import React from "react";
import style from "./style";
import LangContext from "../../context/languageContext";
import { NotificationData } from "../../constants/data";
import { Flex, Text, Image, Center } from "@chakra-ui/react";
import EmptyItem from "../../components/image/nodata.jpg";
import { useHistory } from "react-router-dom";

function Notification({notification}) {
  console.log('notification',notification)
    const { currentLangData } = React.useContext(LangContext);
    let history = useHistory ();
  return (
    <Flex  {...style.mainContainer}>
      <Flex {...style.topContainer}>
        <Text {...style.notificatLabel}>{currentLangData.app.notifications}</Text>
          <Center {...style.seeAllLabel} onClick={()=>history.push("/NotificationDetail")}>
          {currentLangData.app.seeAll}
          </Center>
      </Flex>
      <Flex {...style.nTopContainer}>
        {notification? notification?.map((item, index) => {
          return (
              <Flex  key={index} {...style.notificationMainContaier}>
            <Flex {...style.notificationContaier}>
              <Text {...style.cLabel}>{item.notification.title}</Text>
              <Text {...style.dateLabel}>{item.date}</Text>
            </Flex>
            <Text fontSize={12} noOfLines={1}>{item.notification.body}</Text>
            </Flex>
          );
        }):<Image  w={'300px'} src={EmptyItem} />}
      </Flex>
    </Flex>
  );
}

export default Notification;
