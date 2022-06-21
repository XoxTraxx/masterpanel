import React from "react";
import ReactDOM from "react-dom";
import {
  ButtonGroup,
  Flex,
  Box,
  Button,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "../config/color";
import { useHistory, useLocation } from "react-router-dom";
import styles from "../components/formEditor/styles";
import { useAuthState } from "../context/authContext";
import LangContext from "../context/languageContext";
import "bootstrap";
import "./theming.css";
import buffer from "buffer";
import { AlertMessage } from "../components/Alert";
import ApiManager from "../config/apiManager";
import HuawieUploads from "../config/huawieUpload";
import "grapesjs/dist/css/grapes.min.css";
import grapesjs from "grapesjs";
import gsTap from "grapesjs-tabs";
import toolbox from "grapesjs-plugin-toolbox";
import { uploadImage } from "../config/imageUploader";
import gjsPresetWebpage from "grapesjs-preset-webpage";
// import OBS from "huawei-obs";
import { LandingPage } from "../components/ClientFromList/template/templates";
import tUIImageEditor from 'grapesjs-tui-image-editor';

const ClientList = () => {
  // Temp array of image saved by huawei cloud static //
  let tempImageArray = [
    "https://trax-media.obs.my-kualalumpur-1.alphaedge.tmone.com.my:443/trax-Images0.png?AccessKeyId=UU9PVEFNRJWZUZCJVBH9&Expires=1647582972&response-content-disposition=attachment%3Bfilename0%3D.png&Signature=blOoDFar5iYzjpXa0ubFGgckyrk%3D",
    " https://trax-media.obs.my-kualalumpur-1.alphaedge.tmone.com.my:443/trax-Images0.png?AccessKeyId=UU9PVEFNRJWZUZCJVBH9&Expires=1647582969&response-content-disposition=attachment%3Bfilename0%3D.png&Signature=gniztKPT60rKXUZL/fTv2SnuuAo%3D",
    "https://trax-media.obs.my-kualalumpur-1.alphaedge.tmone.com.my:443/trax-Images0.png?AccessKeyId=UU9PVEFNRJWZUZCJVBH9&Expires=1647582676&response-content-disposition=attachment%3Bfilename0%3D.png&Signature=BRzLCpIIhgZjlGhsAGm7qqNiNws%3D",
  ];
  let history = useHistory();
  let location = useLocation();
  const bucketName = "trax-media";

  const { merchant } = useAuthState();
  const [editor, setEditor] = React.useState(null);
  const [htmlContent, setHtmlContent] = React.useState(editor);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { currentLangData } = React.useContext(LangContext);
  const [message, setMessage] = React.useState("");
  const [updateLoading, setUpdateLoading] = React.useState(false);
  const [sucessLoading, setSucessLoading] = React.useState(false);

  const apiManager = ApiManager.getInstance();
  const huawieUpload = HuawieUploads.getInstance();
  let n = 0;

  React.useEffect(() => {
    n = n + 1;
    window.Buffer = window.Buffer || buffer.Buffer;
    let editHtml = history.location?.editData?.html;
    let editCss = history.location?.editData?.css;

    let newArrayOfImage = tempImageArray.map((item) => {
      return {
        type: "image",
        src: `${item}`,
        height: 350,
        width: 250,
        name: "First image",
      };
    });
    const editor = grapesjs.init({
      panels: {
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'alert-button',
            className: 'btn-alert-button',
            label: 'Click my butt(on)',
            command(editor) { alert('Hello World'); }
          }
        ]
      },
      container: "#editor",
      fromElement: false,
      // fromElement: 1,
      // html: LandingPage.html,
      // css: LandingPage.css,
      // assets: LandingPage.assets || LandingPage.assets,
      // components: LandingPage.components,
      // style: LandingPage.style,
      components: editHtml,
      style: editCss,
      assetManager: {
        assets: [],
        
          data: [
            'https://image/path',
            {type: 'image', src: 'https://image/path', height:350, width:250},
            
          ]
      },

      // components: LandingPage.html,
      // style: LandingPage.css,

      // customFetch: (url, options) => axios(url, { data: options.body }),

      // allowScripts: 1,
      storageManager: false,

      plugins: [gjsPresetWebpage, gsTap, toolbox,tUIImageEditor],
      pluginsOpts: { gjsPresetWebpage: {} },
    });
    
    // panelOpts.get("buttons").add([
    //   {
    //     attributes: {
    //       title: "Open Templates",
    //     },
    //     className: "fa fa-file-o",
    //     command: "open-templates", //Open modal
    //     id: "open-templates",
    //   },
    //   {
    //     attributes: {
    //       title: "Save As Template",
    //     },
    //     className: "fa fa-archive",
    //     command: "save-as-template", //Save page as template
    //     id: "save-as-template",
    //   },
    //   {
    //     attributes: {
    //       title: "Take Screenshot",
    //     },
    //     className: "fa fa-camera",
    //     command: "take-screenshot", //Take an image of the canvas
    //     id: "take-screenshot",
    //   },
    // ]);
    const assetManager = editor.AssetManager;
    editor.Panels.addButton('options', [ { id: 'save', className: 'fa fa-floppy-o icon-blank', command: function(editor1, sender) { assetManager.add(['https://image.shutterstock.com/image-photo/domes-badshahi-mosque-emperor-built-260nw-492232558.jpg','https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg']) }, attributes: { title: 'Save Template' } }, ]);
    setEditor(editor);
  }, []);

  React.useEffect(() => {
    if (editor) {
      editor.editor.on("open-templates", (e) => {
      });
      editor.editor.on("change:changesCount", (e) => {
        const test = editor.editor.getHtml();
        setHtmlContent(test);
        console.log("=>", editor.getConfig());
      });

      // The upload is started
      editor.editor.on("asset:upload:start", (e) => {
        // startAnimation();
        const assetManager = editor.AssetManager;
        assetManager.add(['https://image.shutterstock.com/image-photo/domes-badshahi-mosque-emperor-built-260nw-492232558.jpg','https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg'])        
         console.log("upload starts", e);
      });

      // The upload is ended (completed or not)
      editor.editor.on("asset:upload:end", (m) => {
        // endAnimation();
        console.log("upload ends",m);
      });
     
      editor.editor.on("asset:open", (m) => {
        // endAnimation();
      });
      // Error handling
      editor.editor.on("asset:upload:start", (err) => {
        console.log("asset:upload:start", err);
      });

      editor.editor.on("asset:upload", (err) => {
        console.log("asset:upload", err);
      });

      // uploading image to s3 on response //
      editor.editor.on("asset:upload:response", (response) => {
        console.log("asset:upload:response", response && response);
        let recentFileImage = response && response.data[0].src;
        let nameOfFile = response && response.data[0].name;
        let dataOfImage = dataURLtoFile(recentFileImage, nameOfFile);

        console.log("dataOfImage=>", dataOfImage);

        //   uploadImage(dataOfImage)
        //     .then((response) => console.log("response of imageS3", response))
        //     .catch((err) => console.log("Error uploading S3 image", err));
      });

      // editor.AssetManager.load({
      //   assets: LandingPage.assets,
      // });
      // editor.add(assets)
      // addTempleteThroughLocal(editor);
      // const componentType = editor.component.get("type"); // eg
      // addingBlock(editor);
      // console.log("componentType", componentType);
      const am = editor.AssetManager;
      let newArrayOfImage = tempImageArray.map((item) => {
        console.log("itemitem=>", item);
        return {
          src: `${item}`,
          category: "c1",
          height: 350,
          width: 250,
          name: "First image",
        };
      });

      console.log("newAdd Image", newArrayOfImage);
      am.add(newArrayOfImage);
    }
  }, [editor]);

  React.useEffect(() => {
    console.log("obs-client: ", huawieUpload);
  }, []);

  const uuidv4 = () => {
    return "xxxx-xxxx-xxx-xxxx".replace(/[x]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const downloadHuaweiUploads = () => {
    // huawieUpload.obsClient
    //   .getObject({
    //     Bucket: bucketName,
    //     Key: "trax-Images.png",
    //     ProgressCallback: (e) => console.log("ProgressCallback", e),
    // SavedByType: "file",
    // Range: 'bytes=0-10',
    //   })
    //   .then(function (result) {
    //     if (result.CommonMsg.Status < 300) {
    //       console.log("Content-->\n" + result.InterfaceResult);
    //       console.log("\n");
    //     }
    //     console.log("result.InterfaceResult=>", result.InterfaceResult);
    // console.log(
    //   "DownloadPath-->\n" + result.InterfaceResult.Content.SignedUrl
    // );
    // });

    console.log("n------->", n);
    const { SignedUrl } = huawieUpload.obsClient.createSignedUrlSync({
      Method: "GET",
      Bucket: bucketName,
      Key: `trax-Images${n}.png`,
      QueryParams: {
        "response-content-disposition": `attachment;filename${n}=.png`,
        // ResponseContentType: 'application/octet-stream',
      },
    });
    console.log("SignedUrl", SignedUrl);
  };

  const uploadImageHuawieFile = (file) => {
    let randomID = uuidv4();
    console.log("random ID", randomID);
    huawieUpload.obsClient
      .putObject({
        Bucket: bucketName,
        // Bucket: "trax-media.trax-media",
        // name: "trax-media",
        // Key: `${randomID}`,
        Key: `trax-Images${n}.png`,
        // Body : file
        SourceFile: file,
        // ContentType: "image/png",
      })
      .then(function (result) {
        if (result.CommonMsg.Status < 300) {
          console.log("Create object:" + " successfully!\n");
          downloadHuaweiUploads();
        }
        console.log("result Huawei: ", result);
      })
      .catch((error) => {
        console.log("Error", error);
      });
    let item = huawieUpload.obsClient.getBucketLocation();
    console.log("getBucketLocation", item);
  };

  const dataURLtoFile = (dataurl, filename) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  //Usage example:
  var file = dataURLtoFile(
    "data:text/plain;base64,aGVsbG8gd29ybGQ=",
    "TraxAssets.txt"
  );
  // console.log("Image=>", file);

  const handleEditorAssets = () => {
    let assetImages = [];
    const assetsOfEdtor = editor.AssetManager;

    // let allImage = assetsOfEdtor.getSrc();
    // console.log("allImage", allImage);
    var assetStore = assetsOfEdtor.store();
    var assetType = assetsOfEdtor.getType("image");
    console.log("assetType=>", assetType, "assetStore=>", assetStore);
    const assets = assetsOfEdtor.getAll();
    console.log("assets.models=>", assets.models);

    let arrayOfImage = assets.models.map((value) => {
      console.log("itemitem=>", value);

      let recentFileImage = value && value.attributes.src;
      let nameOfFile = value && value.attributes.name;
      let dataOfImage = dataURLtoFile(recentFileImage, nameOfFile);

      console.log(
        "Name=>",
        nameOfFile + "\n",
        "dataOfImage URL=>",
        dataOfImage
      );
      // uploadToS3(dataOfImage);
      // uploadImageHuawieCloud(base64Image);

      uploadImageHuawieFile(dataOfImage);

      return dataOfImage;
    });

    console.log("arrayOfImage", arrayOfImage);

    assetsOfEdtor.render(
      assets.filter((asset) => asset.get("category") == "c1")
    );
    console.log("All AssetsOfEditor", assetsOfEdtor);
  };

  const uploadToS3 = async (array) => {
    console.log("uploadHuawei function executed");
    await uploadImage(array)
      .then((response) => console.log("response of imageS3", response))
      .catch((err) => console.log("Error uploading S3 image", err));
    return;
  };

  const addTempleteThroughLocal = (editor) => {
    console.log("editor", editor);
    const assetsOfEd = editor.AssetManager.getAll();
    const assetsOfEdMap = editor.AssetManager.getAllMap();
    const compnentsOfEditor = editor.Components.getComponents();

    console.log("assetsOfEdMap", assetsOfEdMap);
    console.log("assetsOfEd", assetsOfEd);
    console.log("compnentsOfEditor", compnentsOfEditor);
    // let template = ""; //Use this to set the template name, you could set this value to listen to an input field

    // editor.Commands.add("save-template", {
    //   run: function (editor, sender) {
    //     sender && sender.set("active"); // turn off the button
    //     let components = editor.getComponents();
    //     let style = editor.getStyle();
    //     let templateData = {
    //       components: components,
    //       style: style,
    //     };
    //     localStorage.setItem(template, JSON.stringify(temlateData));
    //   },
    // });
  };

  const addPage = () => {
    let htmlOfEditor = editor.getHtml();
    let cssOfEditor = editor.getCss();
    let eiditorAssets = editor;
    console.log("eiditorAssets=>", eiditorAssets.getConfig().assets);

    let body = {
      html: htmlOfEditor,
      css: cssOfEditor,
      publish: "global",
      parent: history.location?.data?.parent,
      status: 1,
      javascript: "null",
      meta: history.location?.data?.meta,
      seo: history.location?.data?.seo,
      path: history.location?.data.name,
      // path:`{/${history.location?.data.pageName}}`,
      pageName: history.location?.data.name,
    };
    apiManager
      .post("addPage", body)
      .then((response) => {
        if (response.message === 6569) {
          setMessage("Page Successfully Added");
        } else {
          setMessage("Some Thing Went Wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addForm = () => {
    let htmlOfEditor = editor.getHtml();
    let cssOfEditor = editor.getCss();
    let body = {
      html: htmlOfEditor,
      css: cssOfEditor,
      publish: "global",
      parent: history.location?.data?.parent,
      status: 1,
      javascript: "null",
      path: history.location?.data.name,
      // path:`{/${history.location?.data.pageName}}`,
      formName: history.location?.data.name,
    };
    apiManager
      .post("addForm", body)
      .then((response) => {
        if (response.message === 6577) {
          setMessage("Form Successfully Added");
        } else {
          setMessage("Some Thing Went Wrong!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log("updateMethod Called", history.location?.editData);

  const handleUpdateMethod = () => {
    setUpdateLoading(!updateLoading);
    let updatedHtml = editor.getHtml();
    let updatedCss = editor.getCss();

    let body = {
      html: updatedHtml,
      css: updatedCss,
      publish: "global",
      parent: history.location?.editData?.parent,
      status: 1,
      javascript: "null",
      path: history.location?.editData?.pageName,
      pageId: history.location?.editData.pageId,
      // path:`{/${location?.data.pageName}}`,
      path: history.location?.editData?.path,
      pageName: history.location?.editData.pageName,
    };
    console.log("update Api=>", body);
    apiManager
      .post("updatePage", body)
      .then((response) => {
        if (response.message === 6571) {
          // setSucessLoading(false);
          console.log("Successfully Updated page");
          setUpdateLoading(updateLoading);

          history.push("/PageList");
        }
        console.log(response, "Updated Response");
      })
      .catch((error) => {
        console.log(error, "error");
        setUpdateLoading(updateLoading);
      });
  };

  const apiCall = () => {
    history.location?.data?.displayName === "Add New Form"
      ? addForm()
      : addPage();
  };

  return (
    <Box style={{ backgroundColor: "white" }}>
      {message ? (
        <AlertMessage
          message={message}
          onClick={() => setMessage(null)}
        ></AlertMessage>
      ) : null}
      <Flex justify={"space-between"} padding={"2"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Button
            isLoading={updateLoading}
            {...styles.btnGroup}
            color={"white"}
            isDisabled={history.location?.editData ? false : true}
            background={theme.customColors.masterpanelColors[100]}
            onClick={() => handleUpdateMethod()}
          >
            Update
          </Button>

          <Button
            // isLoading={updateLoading}
            {...styles.btnGroup}
            color={"black"}
            ml={5}
            onClick={() => handleEditorAssets()}
          >
            Assets
          </Button>
        </Flex>
        <Flex justifyContent={"center"}>
          <ButtonGroup>
            <Button
              {...styles.btnGroup}
              isLoading={sucessLoading}
              background={theme.customColors.masterpanelColors[100]}
              onClick={() => apiCall()}
              isDisabled={history.location?.editData != null ? true : false}
            >
              Save
            </Button>
            <Button
              {...styles.btnGroup}
              color={!"black" ? "white" : "black"}
              onClick={() => history.goBack()}
            >
              Go Back
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>

      <div className="App">
        <div className={"gjs"} id={"editor"}></div>

        {/* <Flex>
          <ButtonGroup {...styles.btnGroup}>
            <Button
              background={theme.customColors.masterpanelColors[100]}
              onClick={() => apiCall()}
            >
              Save
            </Button>
            <Button color={!"black" ? "white" : "black"}>Cancel</Button>
          </ButtonGroup>
        </Flex> */}
        {/* <Flex {...styles.main} flexDirection={"row"}> */}
        {/* <Flex
        flexDirection={"column"}
        width={isMobile ? "100%" : "70%"}
        // width={"100%"}
      >
        {renderSearchbarFlex()}
        <Flex flexDirection={"column"}>
          <Flex
            flexDirection={isMobile ? "column" : "row"}
            {...styles.buttonContainer}
            // padding={3}
          >
            {Tabs.map((item, index) => {
              let selected = item === selectedTab;
              return (
                <Button
                  backgroundColor={selected ? "#60c9ca" : ""}
                  onClick={() => setSelectedTab(item)}
                  {...styles.tabButton}
                  key={index}
                  color={selected ? "white" : "black"}
                >
                  {item}
                </Button>
              );
            })}
          </Flex>
          {selectedTab != "All" ? (
            <Flex {...styles.multiFlex}>
              <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
            </Flex>
          ) : (
            <Flex {...styles.multiFlex}>
              <Text {...styles.ppLabel}>{renderTitle(selectedTab)}</Text>
            </Flex>
          )}
          {renderTabsData(selectedTab)}
        </Flex>
      </Flex>

      <Flex width={isMobile ? "100%" : "30%"} {...styles.rightContainer}>
        <Flex {...styles.menuContainer}>
          <Button
            {...styles.rnButton}
            isDisabled={"true"}
            onClick={() => setSelectedTabRight(currentLangData.app.preview)}
            bg={
              selectedTabRight === currentLangData.app.preview
                ? "#24b7b0"
                : theme.customColors.gray[1001]
            }
            color={
              selectedTabRight === "Preview"
                ? theme.customColors.white[100]
                : theme.customColors.black[100]
            }
          >
            {currentLangData.app.preview}
          </Button>
          <Menu>
            <MenuButton
              {...styles.saveMenu}
              as={Button}
              bg={
                selectedTabRight === currentLangData.app.save
                  ? "#24b7b0"
                  : theme.customColors.gray[1001]
              }
              color={
                selectedTabRight === "Save"
                  ? theme.customColors.white[100]
                  : theme.customColors.black[100]
              }
              rightIcon={<IoMdArrowDropdown />}
              onClick={() => setSelectedTabRight(currentLangData.app.save)}
            >
              {currentLangData.app.save}
            </MenuButton>
            <MenuList>
              <MenuItem>{currentLangData.app.save}</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex {...styles.autherContainer}>
          <Text>{currentLangData.app.auther}</Text>
          {renderAuthor()}
        </Flex>
        <Flex>
          {renderDateandTime("Post Date")} {renderDateandTime("Post Time")}{" "}
        </Flex>
        <Flex {...styles.commonFlex}>{TagComponent()}</Flex>
        <Flex {...styles.commonFlex}>
          {SwitchComponent("Publish Globally")}
        </Flex>
        <Flex {...styles.commonFlex}>
          {SwitchComponent("Published in Engilsh")}
          </Flex>
        </Flex> */}
      </div>
    </Box>
  );
};
export default ClientList;
