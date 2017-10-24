import knex from 'knex';
import bookshelf  from 'bookshelf';
import knexConfig from './knexfile';

var bookshelf1 = bookshelf(knex(knexConfig.development));
bookshelf1.plugin('pagination');
export default bookshelf1;
