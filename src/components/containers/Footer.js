import React from 'react';
import './../../styles/components/footer.css';
import Grid from '@material-ui/core/Grid';
import SearchButton from './../presentations/searchButton';
import ShareButton from './../presentations/shareButton';
import GroupSocialMedia from './../presentations/groupSocialMedia';
const Footer = () => {
    return (
        <div class="all-footer">
            <Grid style={{margin: 10}} container justify="center" spacing={4}>
                <Grid item xs={12} md={3}>
                    <SearchButton/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <ShareButton />
                </Grid>
            </Grid>
            <Grid style={{marginTop: 10}} container justify="center">
                <Grid item xs={10} md={4}>
                    <GroupSocialMedia />
                    <h4 >Coding and STEM for the Youngsters</h4>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;