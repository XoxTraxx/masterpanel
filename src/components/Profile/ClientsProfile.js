import React from "react";
import styles from "./style";
import theme from "../../config/color";
import LangContext from "../../context/languageContext";
import { SimpleGrid, Text, Box, Avatar, Flex, Center,Checkbox } from "@chakra-ui/react";
import { useAuthState } from "../../context/authContext";
import { useSelector, useDispatch } from "react-redux";
import style from "./style";
const ClientsProfile = () => {
  const [selected, setSelected] = React.useState("");
  const state = useSelector((state) => state);
  console.log("sstate", state?.merchantReducer?.merchant);
  const { user } = useAuthState();
  const { currentLangData } = React.useContext(LangContext);
  return (
    <SimpleGrid {...styles.simpleProfileGrid}>
      <Box {...styles.avatarBox}>
        <Avatar
          {...styles.profileAvatar}
          // src={state?.merchantReducer?.merchant?.documents[0]?state?.merchantReducer?.merchant?.documents[0]:null}
        ></Avatar>
      </Box>
      <Text {...styles.profileDetail}>{state?.merchantReducer?.merchant?.others}</Text>
      <Text {...styles.traxPlanLabe}>{currentLangData.app.traxPlan}</Text>
      <Flex {...styles.plansContainer}>
        <Center flexDirection={'column'}>
          {state?.subscription?.subscription.lenght>0? state?.subscription?.subscription?.map((item, index) => {
            let selectedItem = index === state?.merchantReducer?.merchant?.subscription;
            return (
              <Flex
              bg={selectedItem?'#60c9ca':theme.customColors.gray[1000]}
              color={selectedItem?theme.customColors.white[100]:theme.customColors.black[100]}
                onClick={() => setSelected(item.packageName)}
                // borderColor={
                //   selectedItem ? "#60c9ca" : theme.customColors.white[100]
                // }
                {...styles.plansInnerContainer}
              >
                {/* <Checkbox disabled  isChecked={selectedItem?true:false} colorScheme={'green'} /> */}
                <Text style={{paddingLeft:10,fontSize:15}}>{item.packageName}</Text>
              </Flex>
            );
          }):null}
        </Center>
      </Flex>
    </SimpleGrid>
  );
};

export default ClientsProfile;
