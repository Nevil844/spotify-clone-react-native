import { StyleSheet , FlatList} from 'react-native';

import { Text} from '../../components/Themed';
import { tracks } from '../../../assets/data/tracks';
import TrackListItem from '../../components/TrackListItem';

export default function HomeScreen() {
  return (
      <FlatList 
        data={tracks}
        renderItem={({item}) => <TrackListItem track={item} /> }
        showsVerticalScrollIndicator={false}
      />
  );
}

