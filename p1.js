// Made By Crazy4Redstone!!!

// Variables:



// Blocks:

Block.defineBlock (55,"Redstone_Off",[["redstone_dust_cross",0]],50,false,13)
Block.setShape (55,0,0,0,1,1/16,1)
Block.setDestroyTime (55,0.01)
Block.setColor (55,[0x440000])
Block.setRenderLayer (55,2)

Block.defineBlock (100,"Redstone_Off",[["redstone_dust_cross",0]],50,false,13)
Block.setShape (100,0,0,0,1,1/16,1)
Block.setDestroyTime (100,0.01)
Block.setColor (100,[0xFD0000])
Block.setRenderLayer (100,2)

Block.defineBlock (70,"Stone Pressure Plate",[["stone",0]],50,false,13)
Block.setShape (70,0,0,0,1,1/16,1)
Block.setDestroyTime (70,0.01)
Block.setRenderLayer (70,2)

Block.defineBlock (69,"Lever",[["lever",0]],50,false,1)
Block.setDestroyTime (69,0.01)
Block.setRenderLayer (69,1)

// Functions:

function useItem (x,y,z,i,b,side)
{
var Damage = Level.getData (x,y,z)
if (b == 69 && Damage == 0)
  {
	setTile (x,y,z,69,1)
	TestDust (x-1,y,z,true)
	TestDust (x+1,y,z,true)
	TestDust (x,y,z-1,true)
	TestDust (x,y,z+1,true)
	TestDust (x,y-2,z,true)
  }
if (b == 69 && Damage == 1)
  {
	setTile (x,y,z,69,0)
	TestDust (x-1,y,z,false)
	TestDust (x+1,y,z,false)
	TestDust (x,y,z-1,false)
	TestDust (x,y,z+1,false)
	TestDust (x,y-2,z,false)
  }
}
function TestDust (x,y,z,mode)
{
if (getTile (x,y,z) == 55 && mode)
  {
  setTile (x,y,z,100)
	TestDust (x-1,y,z,true)
	TestDust (x+1,y,z,true)
	TestDust (x,y,z-1,true)
	TestDust (x,y,z+1,true)
	TestDust (x-1,y-1,z,true)
	TestDust (x+1,y-1,z,true)
	TestDust (x,y-1,z-1,true)
	TestDust (x,y-1,z+1,true)
	TestDust (x-1,y+1,z,true)
	TestDust (x+1,y+1,z,true)
	TestDust (x,y+1,z-1,true)
	TestDust (x,y+1,z+1,true)
  }
if (getTile (x,y,z) == 100 && !mode)
  {
	setTile (x,y,z,55)
	TestDust (x-1,y,z,false)
	TestDust (x+1,y,z,false)
	TestDust (x,y,z-1,false)
	TestDust (x,y,z+1,false)
	TestDust (x-1,y-1,z,false)
	TestDust (x+1,y-1,z,false)
	TestDust (x,y-1,z-1,false)
	TestDust (x,y-1,z+1,false)
	TestDust (x-1,y+1,z,false)
	TestDust (x+1,y+1,z,false)
	TestDust (x,y+1,z-1,false)
	TestDust (x,y+1,z+1,false)
  }
}  
var onpressure = false
function modTick ()	
{
if (onpressure)
  {
  if (getTile(getPlayerX(),getPlayerY()-1.7,getPlayerZ()) == 70)
  {
  TestDust (x-1,y,z,true)
	TestDust (x+1,y,z,true)
	TestDust (x,y,z-1,true)
	TestDust (x,y,z+1,true)
  }
  else
  {
  TestDust (x-1,y,z,false)
	TestDust (x+1,y,z,false)
	TestDust (x,y,z-1,false)
	TestDust (x,y,z+1,false)
  onpressure = false
  }
  }
}
function procCmd (c) {
    var p = c.split(" ");
    var command = p[0];
    switch(command) {
        case 'give': {
            if(p[1] > 0) {
                Entity.setCarriedItem(getPlayerEnt(),p[1],1,p[2]);
            }
        }
    }
}
