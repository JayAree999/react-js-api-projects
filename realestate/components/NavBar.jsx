import Link from 'next/link'; 
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react';
import {FcMenu, FcAbout, FcDownLeft} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';

const Navbar = () => (
    <Flex p='2' borderBottom="1px" borderColor="gray.100">
        <Box fontSize="4xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft ="2">JState</Link>
        </Box>
        <Spacer></Spacer>
        <Box>
            <Menu >
                <MenuButton as ={IconButton} icon={<FcMenu size={23} />} variant="outlined" color ="red.400" paddingTop={5} />
                <MenuList marginLeft={-117} minWidth={150} paddingLeft={0.5}>
                    <Link href="/" passHref>
                    <MenuItem command ={<FcDownLeft />} > Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem command ={<BsSearch />}> Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem command ={<FcAbout />}> Buy </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem command ={<FiKey />}> Rent</MenuItem>
                    </Link>
                    
                </MenuList>
            </Menu>
        </Box>

    </Flex>
)

export default Navbar;