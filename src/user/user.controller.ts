import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from "./users.service";
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags("users") //@ApiTags lo puedo poner en todas las rutas de user o en cada endpoint
@Controller("/users")
export class UsersController {
  /**
   *
  */
 constructor(private usersService:UsersService) {}
  
  @ApiOperation({summary:"Get all users"})
  @ApiResponse({status:200,description:"Return all users"})
  @ApiResponse({status:403,description:"Forbidden"})
  @Get()
  getUsers(){
    return this.usersService.getUsers();
    
  }
  
  @ApiOperation({summary:"Create an users"})
  @Post()
  async createUser(@Req() req:Request, @Res() res:Response, @Body() user:CreateUserDto){
    try{
      const response = await this.usersService.createUser(user);
      console.log("post");
      
      return res.status(201).json(response);
    }catch(error){
      console.log(error.message);
      
    }

  }

  @Get("/sum/:num")
  //ParseIntPipe * - * convierte tu variable a numero en este caso, debido a que el tipado de typescript
  //no afecta a la ejecucion del codigo
  getSum(@Param("num",ParseIntPipe) num: number){
    return num +20
  }

  @Get("/active/:status")
  isUserActive(@Param("status",ParseBoolPipe) status:boolean){
    console.log(typeof status);    
    return status;

  }

  @Get("greet")
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query:{name:string,age:number}){
    // console.log(typeof query.name);
    // console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age} years old`;
  }  

}
