import style from "./style";
import React, { useContext } from "react";
import { useHistory} from "react-router-dom";
import Form from '../../components/image/form.png'
import LangContext from "../../context/languageContext";
import { Box, Center, Text ,Image} from "@chakra-ui/react";

const ClientsFormPreView = () => {
  const { currentLangData } = useContext(LangContext);
  let history = useHistory();

  return (
    <Box {...style.mainContainer} display={{ md: "flex" }}>
      <Text {...style.heading}>
        {currentLangData.app.clientFormPerview}
      </Text>
      <Box {...style.detailContainer}>
        <Image  src={Form} />
      </Box>
      <Center cursor={"pointer"} {...style.midContainer}onClick={()=>history.push("/ClientFormPdf")}>
        {currentLangData.app.more}
      </Center>
    </Box>
  );
};
let ClientsFormPreViews = React.memo(ClientsFormPreView);
export default ClientsFormPreViews;
