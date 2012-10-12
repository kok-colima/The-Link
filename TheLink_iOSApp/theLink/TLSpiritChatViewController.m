//
//  TLSpiritChatViewController.m
//  theLink
//
//  Created by Herzon Rodríguez on 04/octubre/2012.
//  Copyright (c) 2012 VanillaSys. All rights reserved.
//

#import "TLSpiritChatViewController.h"
#import "TLSpiritChatCell.h"
#import "TLPersonChatCell.h"
#import "AppDelegate.h"

#define kMaxTextChars 50

@interface TLSpiritChatViewController ()

@end

@implementation TLSpiritChatViewController

@synthesize spiritName = _spiritName;
@synthesize tableView = _tableView;
@synthesize textField = _textField;
@synthesize charsLeftLabel = _charsLeftLabel;

@synthesize chatView = _chatView;
@synthesize sendingView = _sendingView;

@synthesize activityImageView = _activityImageView;

- (void)dealloc {
    [_spiritName release];
    [_tableView release];
    [_textField release];
    [_charsLeftLabel release];
    [_chat release];
    [_spiritAnswers release];
    
    [_chatView release];
    [_sendingView release];
    [_activityImageView release];
    [super dealloc];
}

- (id)initWithNibName:(NSString *)nibNameOrNil bundle:(NSBundle *)nibBundleOrNil spiritName:(NSString *)spiritName
{
    self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];
    if (self) {
        // Custom initialization
        self.title = spiritName;
        self.spiritName = spiritName;
        _chat = [[NSMutableArray alloc] init];
        _spiritAnswers = [[NSArray alloc] initWithObjects:@"Yes", @"No", @"Maybe", @"Let me think about it ...", @"I don't know", @"Ask again", nil];
    }
    return self;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view from its nib.
    UIButton *b = [UIButton buttonWithType:UIButtonTypeCustom];
    [b setFrame:CGRectMake(0, 0, 25, 25)];
    [b setImage:[UIImage imageNamed:@"backButton.png"] forState:UIControlStateNormal];
    [b addTarget:self action:@selector(popController:) forControlEvents:UIControlEventTouchUpInside];
    
    UIBarButtonItem *item = [[[UIBarButtonItem alloc] initWithCustomView:b] autorelease];
    self.navigationItem.leftBarButtonItem = item;
    
    [_chat addObject:[NSString stringWithFormat:@"Hi my name is %@. What do you want to know?", _spiritName]];
    _textField.keyboardAppearance = UIKeyboardAppearanceAlert;
    _sendingView.backgroundColor = [UIColor colorWithRed:0.0 green:0.0 blue:0.0 alpha:0.5];
    
    UITapGestureRecognizer *tap = [[[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(hideKeyboard:)] autorelease];
	[_tableView addGestureRecognizer:tap];
//	_tableView.canCancelContentTouches = YES;
    
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
        // Dispose of any resources that can be recreated.
}

- (IBAction)popController:(id)sender {
    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark - UITableViewDataSource Methods

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return [_chat count];
}

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 60.0;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    NSString *identifier = [NSString stringWithFormat:@"cell%d", indexPath.row%2];
    
    id cell = [tableView dequeueReusableCellWithIdentifier:identifier];
    
    if (!cell) {
        UINib *cellNib = [UINib nibWithNibName:!(indexPath.row%2) ? @"TLSpiritChatCell" : @"TLPersonChatCell" bundle:nil];
        NSArray *topLevelObjects = [cellNib instantiateWithOwner:self options:nil];
        cell = [topLevelObjects objectAtIndex:0];
        [cell setValue:identifier forKey:@"reuseIdentifier"];
    }
    
    [[cell chatLabel] setText:[_chat objectAtIndex:indexPath.row]];
    
    return cell;
}

#pragma mark - UITextFieldDelegate Methods 

- (BOOL)textFieldShouldBeginEditing:(UITextField *)textField {
    [UIView animateWithDuration:0.25
                     animations:^{
                         self.tableView.frame = CGRectMake(_tableView.frame.origin.x, _tableView.frame.origin.y, _tableView.frame.size.width, _tableView.frame.size.height-216);
                         self.chatView.frame = CGRectMake(_chatView.frame.origin.x, _tableView.frame.size.height, _chatView.frame.size.width, _chatView.frame.size.height);
                     }];
    return YES;
}

- (BOOL)textFieldShouldClear:(UITextField *)textField {
    _charsLeftLabel.text = [NSString stringWithFormat:@"%d", kMaxTextChars];
    return YES;
}

- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string {
    NSUInteger newLength = [textField.text length] + [string length] - range.length;
    _charsLeftLabel.text = [NSString stringWithFormat:@"%d", (newLength > kMaxTextChars) ? 0 : kMaxTextChars - newLength];
    return (newLength > kMaxTextChars) ? NO : YES;
}

- (BOOL)textFieldShouldReturn:(UITextField *)textField {
    if ([textField.text isEqualToString:@""]) return NO;
    [_tableView beginUpdates];
    [_chat addObject:textField.text];
    [_tableView insertRowsAtIndexPaths:[NSArray arrayWithObject:[NSIndexPath indexPathForRow:[_chat count]-1 inSection:0]] withRowAnimation:UITableViewRowAnimationFade];
    [_tableView endUpdates];
    
    [_tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:[_chat count]-1 inSection:0] atScrollPosition:UITableViewScrollPositionBottom animated:YES];
    
    _sendingView.frame = CGRectMake(_sendingView.frame.origin.x, _tableView.frame.size.height, _sendingView.frame.size.width, _sendingView.frame.size.height);
    
    _textField.text = @"";
    _charsLeftLabel.text = @"50";
    
    CABasicAnimation* spinAnimation = [CABasicAnimation animationWithKeyPath:@"transform.rotation"];
    spinAnimation.toValue = [NSNumber numberWithFloat:10*M_PI];
    spinAnimation.duration = 2.5;
    [_activityImageView.layer addAnimation:spinAnimation forKey:@"spinAnimation"];
    
    [UIView animateWithDuration:0.25
                     animations:^{
                         [self.view addSubview:_sendingView];
                         self.tableView.frame = CGRectMake(_tableView.frame.origin.x, _tableView.frame.origin.y, _tableView.frame.size.width, _tableView.frame.size.height+216);
                         self.chatView.frame = CGRectMake(_chatView.frame.origin.x, _tableView.frame.size.height, _chatView.frame.size.width, _chatView.frame.size.height);
                     }];
    
    [self performSelector:@selector(answerFromSpirit) withObject:nil afterDelay:2.5];

    [_textField resignFirstResponder];
    return YES;
}

- (void)answerFromSpirit {
    srandom(time(NULL));
    [_tableView beginUpdates];
    [_chat addObject:[_spiritAnswers objectAtIndex:random() % [_spiritAnswers count]]];
    [_tableView insertRowsAtIndexPaths:[NSArray arrayWithObject:[NSIndexPath indexPathForRow:[_chat count]-1 inSection:0]] withRowAnimation:UITableViewRowAnimationFade];
    [_tableView endUpdates];
    
    [_tableView scrollToRowAtIndexPath:[NSIndexPath indexPathForRow:[_chat count]-1 inSection:0] atScrollPosition:UITableViewScrollPositionBottom animated:YES];
    
    [_sendingView removeFromSuperview];    
}

- (IBAction)hideKeyboard:(id)sender {
    if ([_textField isFirstResponder]) {
        [UIView animateWithDuration:0.25
                         animations:^{
                             self.tableView.frame = CGRectMake(_tableView.frame.origin.x, _tableView.frame.origin.y, _tableView.frame.size.width, _tableView.frame.size.height+216);
                             self.chatView.frame = CGRectMake(_chatView.frame.origin.x, _tableView.frame.size.height, _chatView.frame.size.width, _chatView.frame.size.height);
                         }];
        
        [_textField resignFirstResponder];
    }
}

@end
