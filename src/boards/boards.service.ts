import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  createBoard(CreateBoardDto: CreateBoardDto) {
    const { title, description } = CreateBoardDto;

    const board: Board = {
      id: uuid(),
      title, // == title: title
      description, // == description: descrtion
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
  updataeBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
