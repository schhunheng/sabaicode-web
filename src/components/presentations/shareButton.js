import React from "react";
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
const ShareButton = () => {
  return (
    <div>
          <Button
              style={{
                  width: 200,
                  height:50,
                  padding: 10,
                  borderRadius: 20,
                  borderwidth: 5,
                  borderColor:'#ccc'
        }}
        variant="contained"
        startIcon={<ShareIcon style={{marginRight:10}} />}
      >
        Share This  </Button>
    </div>
  );
};

export default ShareButton;
