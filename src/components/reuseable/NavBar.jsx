import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCompleteCart, cartTotal } from '../../features/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
export default function NavBar() {
  const dispatch = useDispatch();
  const cartSum = useSelector(getCompleteCart);
  useEffect ( ()=> {
    dispatch(cartTotal());
  }, [cartSum] )
  return (
    <div>
      <Box sx={{ flexGrow: 1}}>
        <AppBar
          position="static"
          style={{ backgroundColor: 'black' }}
          elevation={0}
        >
          <Toolbar>
            <Typography
              variant="h5"
              fontFamily='Lobster'
              sx={{ flexGrow: 1 }}
              component={Link}
              to='/'
              style={{ color : 'white', textDecoration : 'none' }}
            >
              OnlineShopping
            </Typography>
            <IconButton
              component={Link}
              to='/cart'
              style={{ height: '50px', width: '50px' }}
            >
              <Badge
                badgeContent={cartSum.cartTotalQuantity}
                color='secondary'
                sx={{
                  "& .MuiBadge-badge": {
                    color: "white",
                    backgroundColor: "#ff5722"
                  }
                }}
                >
                <AddShoppingCartIcon style={{ color: 'white' }} />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}