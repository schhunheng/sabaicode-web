import React from 'react';
import './../../styles/components/footer.css';
import Grid from '@material-ui/core/Grid';
import SearchButton from './../presentations/searchButton';
import ShareButton from './../presentations/shareButton';
import GroupSocialMedia from './../presentations/groupSocialMedia';
const Footer = () => {
    return (
        <div class="all-footer">
            <Grid  container justify="center" >
                <div style={{margin: 10}}>
                <Grid item xs={10} md={3}>
                    <SearchButton/>
                </Grid>
                <Grid item xs={10} md={3}>
                    <ShareButton />
                </Grid>
               </div>
            </Grid>
            <Grid container justify="center">
                <div style={{marginTop: 10}}>
                <Grid item xs={10} md={4}>
                    <GroupSocialMedia />
                    <h4 >Coding and STEM for the Youngsters</h4>
                </Grid>
                </div>
                
            </Grid>
        </div>
    );
};

export default Footer;