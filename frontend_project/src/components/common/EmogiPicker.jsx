import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Picker from "@emoji-mart/react";

export const EmogiPicker = (props) => {
  const [ selectedEmogi, setSelectedEmogi ] = useState();
  const [ isShowPicker, setIsShowPicker ] = useState(false);

  useEffect(() => {
    setSelectedEmogi(props.icon);
  }, [props.icon]);
  
  const showPicker = () => setIsShowPicker(!isShowPicker);

  const selectEmogi = (e) => {
    const emojiCode = e.unified.split("-");
    console.log(emojiCode);
    let codesArray = [];
    emojiCode.forEach((el) => {
      codesArray.push("0x" + el);
    });
    const emoji = String.fromCodePoint(...codesArray);
    console.log(emoji);
    setIsShowPicker(false);
    props.onChange(emoji);
  };

  const { icon } = props;
  
  return (
    <Box>
      <Typography variant="h3" fontWeight="700" sx={{ cursor: "pointer" }} onClick={showPicker}>
        {selectedEmogi}
      </Typography>
      <Box sx={{ display: isShowPicker ? "block" : "none", position: "absolute", zIndex: "100" }}>
        <Picker onEmojiSelect={selectEmogi} />
      </Box>
    </Box>
  );
};