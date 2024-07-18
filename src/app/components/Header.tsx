import React from 'react';
import { Flex, Avatar, TextField, Kbd, IconButton, Text, Box } from '@radix-ui/themes';
import { BellIcon, ChevronLeftIcon, DrawingPinFilledIcon, HamburgerMenuIcon, Link1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Header = () => {
  return (
    <>
      <Flex direction='column' className='iphoneBar' mb='-40px'>
        <Flex  p='0' left='0' top='0' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }} className="mobile-menu1" >
          <Flex width='393px' height='60px' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Flex width='113.5px' height='60px' gap='4px' p='12px 5px' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

              <Text weight='bold'>9:41</Text>
              <DrawingPinFilledIcon />
            </Flex>
            <Flex width='122px' height='36px' style={{ border: '1px solid transparent', borderRadius: '32px', background: '#2C333D' }}></Flex>

            <Flex width='135.5px' height='60px' gap='10px' p='12px 28px' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Link1Icon />
              <Text weight='bold'>iphone</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="row" justify="between" className="mobile-menu" >

          <Box>
            <IconButton size="3" color="gray" variant="soft" >
              <a href="#">
                <ChevronLeftIcon height={18} width={18} />
              </a>
            </IconButton>
          </Box>

          <Box>
            <IconButton size="3" color="green" variant="soft" >
              <a href="#">
                <HamburgerMenuIcon height={18} width={18} />
              </a>
            </IconButton>
          </Box>
        </Flex>
      </Flex>
      <Flex className="header" justify="between" p="24px 32px 24px 0px" width="1166px" height="88px" gap="552px" flexGrow='0'>
        <Flex direction="column" gap="8px" width="393px" height="40px">
          <TextField.Root placeholder="Search ShowOps" size="3">
            <TextField.Slot>
              <MagnifyingGlassIcon height={16} width={16} />
            </TextField.Slot>
            <TextField.Slot>
              <IconButton size="1" variant="ghost">
                <Kbd size="3" style={{ boxShadow: 'none' }}>
                  <Text size="3" weight="regular">
                    ⌘ S
                  </Text>
                </Kbd>
              </IconButton>
            </TextField.Slot>
          </TextField.Root>
        </Flex>
        <Flex gap="16px" width="96px" height="40">
          <IconButton size="3" color="gray" variant="soft">
            <a href="#">
              <BellIcon height={18} width={18} />
            </a>
          </IconButton>
          <Avatar
            size="3"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
            variant="solid"
          />
        </Flex>
      </Flex></>
  );
};

export default Header;
